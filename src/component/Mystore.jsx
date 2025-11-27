export default function Map() {
  return (
    <div className="map-container">
        <h1 className="map">FIND A DECATHLON SPORTS STORE NEAR YOU</h1>
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.049899967737!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4aa0c4f%3A0x8e1455c276f4e5b!2sBangalore%20Palace!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        className="map-iframe"
        allowFullScreen=""
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
