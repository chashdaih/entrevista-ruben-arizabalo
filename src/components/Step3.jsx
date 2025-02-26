export default function Step2() {
  return (
    <section className={styles.step}>
      <h2>Order Summary</h2>

      <dl>
        <dt>Name:</dt>
        <dd>J. Smith</dd>
        <dt>Email:</dt>
        <dd>smith@acme.test</dd>
        <dt>Plan:</dt>
        <dd>Free Trial</dd>
      </dl>
    </section>
  );
}
