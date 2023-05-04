(()=>{"use strict";var t="";const e=t+"f19134c02b40d250b1ce.png",n=t+"c20e77866c82422337d1.png",i=t+"eba90016af0858141a0f.png",s=t+"cdadabcb7bd6a62c6867.png",a=t+"1e54258e1aef2755565c.png",c=t+"700fa0d776a9191779c0.png",r=t+"4960018788afc3a16da7.png",m=t+"25889b135f0a648ce398.png";class h{constructor(t){this.number=t}checkLuhn(){for(var t=0,e=!1,n=this.number.length-1;n>=0;n--){var i=+this.number[n];e&&(i*=2)>9&&(i-=9),t+=i,e=!e}return t%10==0}checkPaymentSystem(){let t=new RegExp("^3[47][0-9]{13}$"),e=new RegExp("^4[0-9]{12}(?:[0-9]{3})?$"),n=new RegExp("^(62[0-9]{14,17})$"),i=new RegExp("^81[0-9]{14}[0-9]*$"),s=new RegExp("^220(0|4)[0-9]{11}[0-9]*$"),a=new RegExp("^5[1-5][0-9]{14}$"),c=new RegExp("^2[2-7][0-9]{14}$"),r=new RegExp("^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}"),m=new RegExp("(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$"),h=new RegExp("^3[0689][0-9]{12}[0-9]*$"),o=new RegExp("^35[0-9]{14}[0-9]*$");return e.test(this.number)?"VISA":t.test(this.number)?"AMEX":s.test(this.number)?"MIR":a.test(this.number)||c.test(this.number)?"MASTERCARD":r.test(this.number)||m.test(this.number)?"DISCOVER":h.test(this.number)?"DINERS":o.test(this.number)?"JCB":n.test(this.number)||i.test(this.number)?"UNION_PAY":void 0}}class o{constructor(t){this.parenEl=t,this.onSubmit=this.onSubmit.bind(this),this.onInput=this.onInput.bind(this)}static get markup(){return'\n    <form class="widjet-form">\n        <div class="img-container"></div>\n        <input class="cc-input" id="cc-i" type="text">\n        <button type="submit" class="validate-btn">Click to Validate</button>\n    </form>\n        '}bindToDOM(){this.parenEl.innerHTML=o.markup,this.element=document.querySelector(".widjet-form"),this.input=document.querySelector(".cc-input"),this.submit=document.querySelector(".validate-btn"),this.imgContainer=document.querySelector(".img-container");const t=new Image;t.src=i,t.alt="visa";const h=new Image;h.src=e,h.alt="mastercard";const l=new Image;l.src=a,l.alt="amex";const d=new Image;d.src=c,d.alt="discover";const p=new Image;p.src=s,p.alt="jcb";const u=new Image;u.src=r,u.alt="diners-club";const g=new Image;g.src=n,g.alt="unionpay";const y=new Image;y.src=m,y.alt="mir",this.imgContainer.appendChild(t),this.imgContainer.appendChild(h),this.imgContainer.appendChild(l),this.imgContainer.appendChild(d),this.imgContainer.appendChild(p),this.imgContainer.appendChild(u),this.imgContainer.appendChild(g),this.imgContainer.appendChild(y),this.element.addEventListener("submit",this.onSubmit),this.element.addEventListener("input",this.onInput)}onSubmit(t){t.preventDefault(),new h(this.input.value).checkLuhn()?(this.element.style.background="lightgreen",this.input.classList.remove("invalid"),this.input.classList.add("valid"),setTimeout((()=>{this.element.style.background="white"}),1e3)):(console.log(this.element),this.element.style.background="red",this.input.classList.remove("valid"),this.input.classList.add("invalid"),setTimeout((()=>{this.element.style.background="white"}),1e3))}onInput(t){t.preventDefault();let e=new h(this.input.value);e.checkPaymentSystem()?(Array.from(this.imgContainer.children).forEach((t=>t.style.opacity="20%")),"VISA"==e.checkPaymentSystem()?this.imgContainer.firstChild.style.opacity="100%":"MASTERCARD"==e.checkPaymentSystem()?(this.imgContainer.children[1].style.opacity="100%",console.log("Mastercard")):"AMEX"==e.checkPaymentSystem()?this.imgContainer.children[2].style.opacity="100%":"DISCOVER"==e.checkPaymentSystem()?this.imgContainer.children[3].style.opacity="100%":"JCB"==e.checkPaymentSystem()?this.imgContainer.children[4].style.opacity="100%":"DINERS"==e.checkPaymentSystem()?this.imgContainer.children[5].style.opacity="100%":"UNION_PAY"==e.checkPaymentSystem()?this.imgContainer.children[6].style.opacity="100%":"MIR"==e.checkPaymentSystem()&&(this.imgContainer.children[7].style.opacity="100%")):Array.from(this.imgContainer.children).forEach((t=>t.style.opacity="100%"))}}const l=document.body;new o(l).bindToDOM()})();