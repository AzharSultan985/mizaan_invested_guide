    import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function CheckoutPage() {

    const { state } = useLocation();

    const [cardName,setCardName]=useState("");
    const [cardNumber,setCardNumber]=useState("");
    const [expiry,setExpiry]=useState("");
    const [cvv,setCvv]=useState("");

    if(!state){
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                No Plan Selected
            </div>
        )
    }

    return(

<div className="min-h-screen bg-slate-950 py-24 px-6">

<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

{/* Left */}

<div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

<h2 className="text-3xl font-bold text-white">
Payment Details
</h2>

<p className="text-slate-400 mt-2">
Complete your subscription securely.
</p>

<div className="mt-8 space-y-5">

<input
placeholder="Card Holder Name"
value={cardName}
onChange={(e)=>setCardName(e.target.value)}
className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4 text-white outline-none focus:border-emerald-500"
/>

<input
placeholder="Card Number"
value={cardNumber}
onChange={(e)=>setCardNumber(e.target.value)}
className="w-full rounded-xl bg-slate-950 border border-slate-700 p-4 text-white outline-none focus:border-emerald-500"
/>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="MM/YY"
value={expiry}
onChange={(e)=>setExpiry(e.target.value)}
className="rounded-xl bg-slate-950 border border-slate-700 p-4 text-white outline-none focus:border-emerald-500"
/>

<input
placeholder="CVV"
value={cvv}
onChange={(e)=>setCvv(e.target.value)}
className="rounded-xl bg-slate-950 border border-slate-700 p-4 text-white outline-none focus:border-emerald-500"
/>

</div>

<button
className="w-full mt-4 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
>

Continue To PayFast

</button>

</div>

</div>

{/* Right */}

<div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

<h2 className="text-white text-3xl font-bold">
Order Summary
</h2>

<div className="mt-8 space-y-5">

<div className="flex justify-between">

<span className="text-slate-400">
Plan
</span>

<span className="text-white">
{state.planName}
</span>

</div>

<div className="flex justify-between">

<span className="text-slate-400">
Billing
</span>

<span className="text-white">
{state.period}
</span>

</div>

<div className="flex justify-between">

<span className="text-slate-400">
Description
</span>

<span className="text-white text-right">
{state.description}
</span>

</div>

<hr className="border-slate-700"/>

<div className="flex justify-between text-2xl font-bold">

<span className="text-white">
Total
</span>

<span className="text-emerald-400">
{state.price}
</span>

</div>

</div>

</div>

</div>

</div>

    )

}