import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { nom, prenom, codeParrainage, quantities } = body

    // Validation côté serveur
    if (!nom || !prenom || !codeParrainage) {
      return Response.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    // Configuration Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'dev.web@fleuronindustries.com',
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Formater les supports commandés
    const supportsHTML = Object.entries(quantities)
      .map(([id, qty]) => {
        const labels = {
          courriers: 'Courriers imprimés A5',
          panneaux: 'Panneaux publicitaires 80×60',
          flyers: 'Flyers A5',
          affiche: 'Affiche A4',
        }
        return `<p><strong>${labels[id] || id} :</strong> ${qty} unité(s)</p>`
      })
      .join('')

    // Contenu de l'email
    const mailOptions = {
      from: 'dev.web@fleuronindustries.com',
      to: 'dev.web@fleuronindustries.com',
      subject: 'Nouvelle commande de supports - Fleuron Industries',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #72417d;">Nouvelle commande de supports de communication</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #72417d; margin-top: 0;">Informations de l'ambassadeur</h3>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Prénom :</strong> ${prenom}</p>
            <p><strong>Code de parrainage :</strong> ${codeParrainage}</p>
          </div>

          <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">Supports commandés</h3>
            ${supportsHTML}
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Envoyé depuis le formulaire de commande Fleuron Industries
          </p>
        </div>
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: 'Commande envoyée avec succès' })
  } catch (error) {
    console.error('Erreur envoi commande:', error)
    return Response.json(
      { error: "Erreur lors de l'envoi de la commande", details: error.message },
      { status: 500 }
    )
  }
}
