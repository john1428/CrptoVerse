import linkedin_logo from '../assets/linkedin_logo.png'
import twitter_logo from '../assets/twitter_logo.png'
import github_logo from '../assets/github_logo.png'
import '../css/index.css'
const ContactFooter = () => {
  return (
    <>
    <div className="outerfooter">

        <div className="firstpara">
            <div className="firstpara1">Get in Touch</div>
            <div className="firstpara2">Where we are</div>
        </div>
        <div className="secondpara">
            <div className="secondpara1">Email</div>
            <div className="secondpara2">Social Media</div>
            <div className="secondpara1">Address</div>
        </div>
        <div className="thirdparacol1">
            <div className="outerleft">
                <div className="secondpara1">sidharth392781@gmail.com</div>
                <div className="secondpara2">9260985835</div>
            </div>

            <div className='outerlogos'>
            <div><a href="https://www.linkedin.com/in/sidharth-paliwal/"><img className='imagelogos' src={linkedin_logo} width='50px' height='12px'/></a></div>
            <div><a href="https://twitter.com/TrenTakerSid007"><img className='imagelogos' src={twitter_logo} width='50px' height='12px'/></a></div>
            <div><a href='https://github.com/john1428'><img className='imagelogos' src={github_logo} width='50px' height='12px'/></a></div>

            </div>
            <div className="outeraddress">
            <div className="">Indiqube Garden 6 Block Kormamgala Bengaluru</div>

            </div>
            
        </div>
        
    </div>
    <div className='stickfooter'>
    <h1 className="stickfooterh1">  
                        @Copyright Sidharth Paliwal 2023- All Right Reserved.   
                    </h1> 

    </div>
    </>
  )
}

export default ContactFooter
