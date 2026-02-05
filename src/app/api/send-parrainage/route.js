import nodemailer from 'nodemailer'
import { getCorsHeaders, handleCorsOptions } from '../cors'

// Gère les requêtes OPTIONS (preflight)
export async function OPTIONS(request) {
  return handleCorsOptions(request)
}

export async function POST(request) {
  const origin = request.headers.get('origin')

  try {
    const body = await request.json()
    const { nomAmbassadeur, villeAmbassadeur, nom, prenom, telephone, codePostal } = body

    // Validation côté serveur (sécurité)
    if (!nomAmbassadeur || !villeAmbassadeur || !nom || !prenom || !telephone || !codePostal) {
      return Response.json(
        { error: 'Tous les champs sont requis' },
        { status: 400, headers: getCorsHeaders(origin) }
      )
    }

    // Configuration Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true pour port 465, false pour autres ports
      auth: {
        user: process.env.SMTP_USER || 'ambassadeurs@fleuronindustries.com',
        pass: process.env.SMTP_PASS, // Mot de passe ou App Password
      },
      tls: {
        rejectUnauthorized: false, // Accepte les certificats auto-signés (dev uniquement)
      },
    })

    // Contenu de l'email
    const mailOptions = {
      from: 'ambassadeurs@fleuronindustries.com',
      to: 'ambassadeurs@fleuronindustries.com',
      subject: 'Nouveau parrainage - Fleuron Industries',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #72417d;">Nouvelle demande de parrainage</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #72417d; margin-top: 0;">L'Ambassadeur</h3>
            <p><strong>Nom et Prénom :</strong> ${nomAmbassadeur}</p>
            <p><strong>Ville :</strong> ${villeAmbassadeur}</p>
          </div>

          <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">Le Parraîné</h3>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Prénom :</strong> ${prenom}</p>
            <p><strong>Téléphone :</strong> ${telephone}</p>
            <p><strong>Code Postal :</strong> ${codePostal}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Envoyé depuis le formulaire de parrainage Fleuron Industries
          </p>
        </div>
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return Response.json(
      { success: true, message: 'Email envoyé avec succès' },
      { headers: getCorsHeaders(origin) }
    )
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return Response.json(
      { error: "Erreur lors de l'envoi de l'email", details: error.message },
      { status: 500, headers: getCorsHeaders(origin) }
    )
  }
}
