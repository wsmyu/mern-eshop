import Accordion from "react-bootstrap/Accordion";

function FaqPage() {
  return (
    <div className="faq">
      <h2>Frequently Asked Question</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Can I buy online and pick up at stores?
          </Accordion.Header>
          <Accordion.Body>
            Buy Online, Pick Up at Store orders are available at select
            locations. Learn more about our buy online, pick up at store option
            HERE. For more information on store and online services, check out
            our SERVICES.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How can I find if the product is available in my local store?
          </Accordion.Header>
          <Accordion.Body>
            Visit the website or app and select the gear you want (including
            size and colour). On the website, under "Add to Bag", click on
            "Check All Store Inventory" to see if it's available near you. On
            the app, you'll see the option to "Pick up today" if it's available
            close by.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>When will I get my refund?</Accordion.Header>
          <Accordion.Body>
            Once your return is processed at our warehouse, your funds will be
            credited back to your original method of payment. You can expect to
            see this reflected on your statement within 3-10 business days.
            Please note that banks may require additional time to process and
            post the transaction, so the credit may not show up until your
            credit card's next monthly billing cycle.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FaqPage;
