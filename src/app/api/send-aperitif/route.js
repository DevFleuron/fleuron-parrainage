import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { ambassadeur, participants } = body

    // Validation côté serveur
    if (!ambassadeur || !participants || participants.length === 0) {
      return Response.json(
        { error: "L'ambassadeur et au moins un participant sont requis" },
        { status: 400 }
      )
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

    // Formater la liste des participants
    const participantsHTML = participants.map((p, i) => `<p>${i + 1}. ${p}</p>`).join('')

    // Calcul du montant (5€ par participant)
    const montant = participants.length * 5

    // Contenu de l'email
    const mailOptions = {
      from: 'dev.web@fleuronindustries.com',
      to: 'dev.web@fleuronindustries.com',
      subject: 'Nouvelle demande apéritif/petit déjeuner - Fleuron Industries',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #72417d;">Nouvelle demande d'apéritif ou petit déjeuner</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #72417d; margin-top: 0;">L'Ambassadeur</h3>
            <p><strong>Nom et Prénom :</strong> ${ambassadeur}</p>
          </div>

          <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">Liste des participants (${participants.length})</h3>
            ${participantsHTML}
            <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd;">
              <strong>Montant pris en charge :</strong> ${montant}€ (5€ × ${participants.length} participants)
            </p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Envoyé depuis le formulaire apéritif/petit déjeuner Fleuron Industries
          </p>
        </div>
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: 'Demande envoyée avec succès' })
  } catch (error) {
    console.error('Erreur envoi apéritif:', error)
    return Response.json(
      { error: "Erreur lors de l'envoi de la demande", details: error.message },
      { status: 500 }
    )
  }
}
