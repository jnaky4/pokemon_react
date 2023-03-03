import { useParams } from "react-router-dom";
import { getInvoice } from "./invoiceData";

export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    /* invoiceId comes from the URL Param in Index.js */
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
      </main>
    );
    
  }