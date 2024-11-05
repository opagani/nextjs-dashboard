export default async function InvoicePage({ params }: { params: any }) {
  const { id } = await params;
  return <p>Invoice ID: {id}</p>;
  // return <div>Invoice Page {await params.id}</div>;
}
