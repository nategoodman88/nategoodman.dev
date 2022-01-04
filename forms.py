# Import django forms 
from django import forms 
# Class for creating form template
class ContactForm(forms.Form):
    # Creates subject line with a max length of 100 characters
    subject = forms.CharField(max_length=100)
    # Pulls the text area widget from django forms, sets max length of 2000 characters to avoid spam and such
    message = forms.CharField(widget=forms.Textarea, max_length=2000)
    # Creates email field for the user to imput their email address
    sender = forms.EmailField
