<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; line-height: 1.6; color: #333; }
        .box { border: 1px solid #ddd; padding: 15px; background: #f9f9f9; }
        h2 { color: #d4af37; }
    </style>
</head>
<body>
    <h2>New Inquiry for Super Laser India</h2>
    <p>You have received a new message from your website contact form:</p>
    
    <div class="box">
        <p><strong>Name:</strong> {{ $data['name'] }}</p>
        <p><strong>Email:</strong> {{ $data['email'] }}</p>
        <p><strong>Phone:</strong> {{ $data['phone'] }}</p>
        <p><strong>Service Requested:</strong> {{ $data['service'] ?? 'Not specified' }}</p>
        <p><strong>Message:</strong><br>{{ $data['message'] }}</p>
    </div>
    
    <p>Please respond to the customer as soon as possible.</p>
</body>
</html>