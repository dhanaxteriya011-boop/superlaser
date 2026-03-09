<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\OwnerNotification;
use App\Mail\PromotionMail;

class ContactController extends Controller 
{
    public function store(Request $request) 
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required',
             'service' => 'nullable|string', // Add this line
            'message' => 'nullable'
        ]);

        // Save to Database
        $contact = Contact::create($data);

        // 1. Send Lead to Shop Owner (Your Email)
        Mail::to('dhanaxteriya011@gmail.com')->send(new OwnerNotification($data));

        // 2. Send Promotional Email to the Customer
        Mail::to($data['email'])->send(new PromotionMail($data));

        return response()->json(['message' => 'Inquiry received! Check your email.'], 200);
    }
}