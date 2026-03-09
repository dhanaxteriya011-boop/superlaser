<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { width: 80%; margin: 20px auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px; }
        .header { background: #1a1a1a; color: #d4af37; padding: 10px; text-align: center; border-radius: 5px; }
        .gold { color: #d4af37; font-weight: bold; }
        .footer { font-size: 12px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px; }
        .btn { background: #d4af37; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Super Laser India</h1>
        </div>
        
        <p>Dear <strong>{{ $data['name'] }}</strong>,</p>
        
        <p>Thank you for reaching out to us regarding <span class="gold">{{ $data['service'] ?? 'our services' }}</span>. We have received your message and our team will get back to you with a custom quote within 2–4 hours.</p>

        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #d4af37;">
            <h3>Special Anniversary Offer! 🏆</h3>
            <p>As we celebrate <strong>25 years</strong> of excellence in Chennai, we are offering a <strong>10% discount</strong> on bulk orders placed this month.</p>
        </div>

        <p>While you wait, feel free to browse our latest collection of Crystal and Acrylic awards on our website.</p>

        <a href="https://superlaserindia.com" class="btn">Visit Website</a>

        <div class="footer">
            <p><strong>Super Laser India</strong><br>
            Mount Road, Chennai – 600 002<br>
            Phone: +91 98765 43210</p>
            <p><em>Crafting Recognition Since 1999.</em></p>
        </div>
    </div>
</body>
</html>