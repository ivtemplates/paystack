var paymentForm = document.getElementById(&#39;paymentForm&#39;);
paymentForm.addEventListener(&#39;submit&#39;, payWithPaystack, false);
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: document.getElementById(&#39;ppk&#39;).innerText,
    metadata:{
  custom_fields:[
    {
      display_name: &quot;First Name&quot;,
      variable_name: &quot;first_name&quot;,
      value: document.getElementById(&#39;first-name&#39;).value,
    },
    {
      display_name: &quot;Cart Items&quot;,
      variable_name: &quot;cart_items&quot;,
      value: document.getElementById(&#39;reff&#39;).innerText,
    },
  ]
},
    email: document.getElementById(&#39;email-address&#39;).value,
    amount: document.getElementById(&#39;item_price&#39;).value * 100,
    currency: &#39;NGN&#39;,
    callback: function(response) {
  window.location = &#39;/p/thank-you.html&#39;
},
    onClose: function() {
      alert(&#39;Transaction was not completed. Are you sure you want to cancel this payment?&#39;);
    },
  });
  handler.openIframe();
}

function makePayment() {
    FlutterwaveCheckout({
      public_key: document.getElementById(&quot;fpk&quot;).innerText,
      tx_ref: document.getElementById(&quot;treft&quot;).innerText,
      amount: document.getElementById(&quot;item_price&quot;).value,
      currency: &quot;NGN&quot;,
      payment_options: &quot;card&quot;,
      redirect_url: // specified redirect URL
        &quot;/p/thank-you.html&quot;,
      meta: {
	CartItems: document.getElementById(&quot;reff&quot;).innerText,
      },
      customer: {
        email: document.getElementById(&quot;email-address&quot;).value,
        name: document.getElementById(&quot;first-name&quot;).value,
	  },
      callback: function (data) {
        console.log(data);
      },
      onclose: function() {
        // close modal
      },
      customizations: {
        title: &quot;aryktech.ng&quot;,
        description: &quot;...just solutions!&quot;,
        logo: &quot;https://1.bp.blogspot.com/-uYZFnu2h9HI/YSnVtfe0BwI/AAAAAAAAAcA/UyW7zqPW2WMd3PoAwl1eb1KfyRtDcITyQCLcBGAsYHQ/s0/Aremu-head-lg.png&quot;,
      },
    });
  }
