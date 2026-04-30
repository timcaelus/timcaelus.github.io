import linkedInIcon from '@/assets/icons/linkedin.png'
import emailIcon from '@/assets/icons/email.png'
import gitHubIcon from '@/assets/icons/github.png'
import resumeIcon from '@/assets/icons/resume.png'

export default function Contact() {
    return (
        <main>
            <div className="card">
                <h1 className="a-lot-bigger">
                        Contact
                </h1>
                <p className="a-little-bigger">
                    For business inquiries, see my business email address and LinkedIn profile below. I also have my GitHub
                    linked, but most of my projects can be found on the portfolio page.
                </p>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/timcaelus/" target="_blank"> 
                        <img src={linkedInIcon} className="icon" />
                    </a>
                    <a href="mailto:plutonium221b@gmail.com" target="_blank">
                        <img src={emailIcon} className="icon" />
                    </a>
                    <a href="https://github.com/timcaelus" target="_blank">
                        <img src={gitHubIcon} className="icon" />
                    </a>
                    <a href="https://docs.google.com/document/d/1vWIip4WGgjdBCDyN41DiB1Woa7CChsTNBg9OLiFJu9s/edit?usp=sharing" target="_blank">
                        <img src={resumeIcon} className="icon" />
                    </a>
                </div>
            </div>
        </main>
    );
}