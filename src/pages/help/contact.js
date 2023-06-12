export default function Contact() {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form>
               <p>
                <label for="email">Your Email:</label>
                <input type="email" name="email" id="email" placeholder="ws2345@tmail.com" required/>
                </p>
                <p>
                    <label for="message">Your message:</label>
                    <textarea name="message" required></textarea>
                </p>
            </form>

        </div>
    )
}