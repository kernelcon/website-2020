import React, { Component } from 'react';
import DonutChart from '../../components/Charts/Donut.js';
import Modal from '../../components/Modal/Modal.js';
import './Schedule.scss';

import config from 'speakersConfig';

class TalksSchedule extends Component {
  static displayName = 'TalksSchedule';

  constructor(props) {
  	super(props);
  	this.state = {
  		isOpen: false,
  		showFriday: true,
  		showSaturday: false,
  		title: '',
  		startTime: '',
  		endTime: '',
  		description: '',
  		technical: ''
  	};
  }

  getTalks() {
  	// Order Alphabetically
  	const talksOrdered = config.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

  	const talks = talksOrdered.map((ele, idx) => {
  		const percentTechnical = (ele.technical / 5) * 100;

  		const speakers = ele.speaker.map((el, idx) => {
  			const twitterUrl = el.twitter.replace('@', '');

  			return (
  				<div className='single-speaker'
  					key={idx}>
            <div className='speaker-name'>
            	{el.name}
            </div>
            {(el.twitter || el.github || el.linkedin) && <div className='speaker-icon-bar'>
              {el.twitter && <span className='speaker-icons'>
                <a href={`https://twitter.com/${twitterUrl}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='twitter-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='twitter-icon'>Twitter icon</title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'/>
                  </svg>
                </a>
              </span>}
              {el.linkedin && <span className='speaker-icons'>
                <a href={`https://www.linkedin.com${el.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='linkedin-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='linkedin-icon'>LinkedIn icon</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                </a>
              </span>}
              {el.github && <span className='speaker-icons'>
                <a href={el.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='github-icon'
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </span>}
            </div>}
          </div>
  			)
  		});


			const speakerLines = (
        <div className='talk-sub-title'>
        	{speakers}

          <div className='length'>{`${ele.length} minutes`}</div>

          {ele.technical && <div className='technical'>
            <DonutChart value={percentTechnical} />
            <span className='tech-label'>% technical</span>
          </div>}
        </div>
			);


  		return (
  			<div id={ele.talk_id}
  				key={idx}
  				className='single-talk'
  			>
          <div className='talk-title'>{ele.title}</div>
          {speakerLines}
          <div className='abstract'>
            {ele.abstract}
          </div>
  			</div>
  		)
  	});

  	return talks;
  }

  popModal = (title, startTime, endTime, description, talkTitle, speaker, technical) => e => {
  	this.setState({
  		title: title,
  		startTime: startTime,
  		endTime: endTime,
  		description: description,
  		talkTitle: talkTitle,
  		speaker: speaker,
  		technical: technical
  	});

  	this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDate(date) {
    if (date === 'Friday') {
      this.setState({
        showFriday: true,
        showSaturday: false
      });
    } else {
      this.setState({
        showFriday: false,
        showSaturday: true
      });
    }
  }

  render() {
  	const talks = this.getTalks();
    const day = this.state.showFriday ? 'Friday ' : 'Saturday ';
  	const percentTechnical = this.state.technical ? (this.state.technical / 5) * 100 : '';


    return (
    	<div className='schedule-talks'>
    		<Modal show={this.state.isOpen}
    			onClose={this.toggleModal}
    			title={this.state.title}
    		>
    			<div className='modal-content'>
    				{this.state.talkTitle && 
    				<div className='modal-talk-title'>
    					{this.state.talkTitle}
    				</div>}
    				{this.state.speaker && 
    				<div className='modal-speaker'>
    					{this.state.speaker}
    				</div>}
    				<div className='modal-headline'>
	    				<div className='modal-time'>
	    					{this.state.startTime} - {this.state.endTime}
	    				</div>
		    			{this.state.technical && <div className='modal-tech'>
		            <DonutChart value={percentTechnical} />
		            <span className='tech-label'>% technical</span>
		          </div>}
		        </div>
    				<div className='modal-description'>
    					{this.state.description}
    				</div>
    			</div>
    		</Modal>
        <ul className='tabs'>
          <li>
            <input type='radio'
              onChange={() => {this.toggleDate('Friday')}}
              name='tabs'
              id='tab1'
              checked={this.state.showFriday} />
            <label htmlFor='tab1'>Friday<span>27</span></label>
          </li>
        
          <li>
            <input type='radio'
              onChange={() => {this.toggleDate('Saturday')}}
              name='tabs'
              id='tab2' 
              checked={this.state.showSaturday} />
            <label htmlFor='tab2'>Saturday<span>28</span></label>
          </li>
        </ul>

        {this.state.showFriday &&
        	<div>
        	<div className='schedule'>{`Tentative ${day} Speaking Schedule`}</div>
	        	<div className='grid-wrapper-friday'>
	            <div className="track">Bat of Doom</div>
	            <div className="track">Terrified Chipmunk</div>
	            <a className="both-tracks"
	            	onClick={this.popModal('Registration Open', '0730', '1720', 'Registration will be in the courtyard area until Friday Keynote and located at the store between the two main tracks.')}>
	              <div className="box">
	                <span className="talk-time">0730</span>
	                <span>Registration Open</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Opening Remarks', '0850', '0900', 'Opening Remarks from Kernelcon Organizers.')}>
	              <div className="box">
	                <span className="talk-time">0850</span>
	                <span>Opening Remarks</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Keynote', '0900', '1000', 'Over the past two years we have see a perceptible shift in security issues.  Traditional architectures like AD and DMZs are falling away and are being replaced with Cloud and IoT.  So, how do we approach this new world? In this talk, John will cover some core tools and techniques we use at BHIS every day to attack organizations.  We will also use these tools and techniques to help frame attendees in their approach and mindset to testing these technologies.', 'Now, For Something Completely Different', 'John Strand')}>
	              <div className="box">
	                <span className="talk-time">0900</span>
	                <span>Keynote: John Strand</span>
	              </div>
	            </a>
	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1000</span>
	                <span>Break (15 min room switch)</span>
	              </div>
	            </a>
	            <a onClick={this.popModal('Talk', '1015', '1115', "Password security is getting out of hand. You only need to watch the latest news stories about large-scale breaches or visit the haveibeenpwned site to see the current state of password security. Expecting end users to invent complex passwords for every web site they visit is untenable. Wouldn't it be great if there was some new technology that uses public key exchange and biometrics to get rid of passwords all together?  Well, that technology is here. WebAuthn (Web Authentication) is a web standard published in 2019 by the World Wide Web Consortium (W3C). The goal of the project is to standardize an interface for authenticating users to web-based applications and services using public-key cryptography instead of passwords. Despite being an emerging technology, this standard has already been adopted by leading browsers and platforms.  This talk aims to shed light the technical details of what WebAuthn is and how it works. We will also cover the security pros and cons of this new standard and make predictions about what this may mean for the future of web application security. This is an introductory talk. You do not need any prior knowledge of web authentication or cryptography to benefit from this talk.", 'Passwords are dead? Long live WebAuthn!', 'Alex Lauerman and Matt South', '3')}>
		            <div className="box">
		              <span className="talk-time">1015</span>
		              <span>Passwords are dead? Long live WebAuthn!</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1015', '1115', "Let's learn how to attack “Modern Desktop” applications. Specifically we will look at the blurring lines between desktop and web applications, and how embedded (browsers) renders can be exploited, the methods for discovering exploits, and how they can be fixed. On this journey we go over remote code execution vulnerabilities I discovered in apps like Teams, Outlook, Facebook Workplace, chat apps like Slack and Google Chat, and even a Docker sandbox escape. I will also be introducing a new IAST (interactive application security testing) tool I developed to help find these issues. Last and most importantly look at how to prevent / fix these issues in your applications.", 'Exploiting Modern Desktop Applications', 'Matt Austin', '4')}>
	            	<div className="box">
	              	<span className="talk-time">1015</span>
	              	<span>Exploiting Modern Desktop Applications</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1115', '1135', "Smart homes can be a highly contested cybersecurity topic. Some professionals are fearful of the technology that can be too close to home - and for good reason. With the current political climate regarding foreign made devices, many devices are not safe to have in the home. This should not stop professionals from gaining more experience with a rapidly expanding technology and figuring out a way to use it effectively. This talk describes a design and implementation of a secure smart home.", 'A Secure Design and Implementation of a Smart Home', 'Owen Parkins', '2')}>
		            <div className="box">
		              <span className="talk-time">1115</span>
		              <span>A Secure Design and Implementation of a Smart Home</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1115', '1135', "A lot of work has gone into breaking out the stages of an attack. Unfortunately, many security teams focus on the detection of infiltration, data loss, or response after an attack. This focus skips over a more proactive approach to preventing the attack during the planning stages. There is a plethora of information publically available about a company and its employees that is collected prior to an attack. This information is used to find vulnerabilities in information systems. The information is also used to plan out social engineering which is used to gain system credentials or additional information about a company.", 'A Hacker’s Viewpoint: Planning the Attack', 'Robert George and Kristina Krasnolobova', '3')}>
	            	<div className="box">
	              	<span className="talk-time">1115</span>
	              	<span>A Hacker’s Viewpoint: Planning the Attack</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1135', '1155', "The DOE CyberForce Competition is an annual college event where student defenders compete against each other, defending their systems from red teams. The goal of this competition is to improve the technical skill sets of the students to prepare them for the work force. However, just randomly throwing red and blue teams together hoping that magic will happen is a recipe for disaster. But it’s hard to correct deep-seated wrong views about these cyber competitions.  So this year, at the Albuquerque site, we developed a process and automated tooling to collect data during the competition to answer questions such as the average number of vulnerabilities patched before game start time, ability for lateral movement without initial access, detection rate of more advanced C2, etc.  This data is really important for us to get insights about the competition so that we can improve it for the students. Hopefully, more competitions will start collecting these types of metrics so that we can improve the state of cyber education events.", 'Dispelling myths of red/blue cyber competition through metrics', 'Kandy Phan', '1')}>
		            <div className="box">
		              <span className="talk-time">1135</span>
		              <span>Dispelling myths of red/blue cyber competition through metrics</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1135', '1155', "This talk will be an introduction into of amateur robotic astronomy for imaging and science and will discuss the challenges and solutions for building robotic telescopes.", 'Astrophotography - Backyard Robotics for Art and Science', 'Seth Eddy', '1')}>
		            <div className="box">
		              <span className="talk-time">1135</span>
		              <span>Astrophotography - Backyard Robotics for Art and Science</span>
		            </div>
	            </a>

	            <a className="both-tracks" onClick={this.popModal('Break for Lunch', '1155', '1300', "We break for lunch and encourage you to try out one of our hundreds of downtown Omaha restaurants!", '')}>
		            <div className="box">
		              <span className="talk-time">1155</span>
		              <span>Break for Lunch (also Diversity Lunch)</span>
		            </div>
	            </a>
							
							<a onClick={this.popModal('Talk', '1300', '1400', "Have you ever seen someone just walking around with a key hanging on thier belt? How about a wall of keys behind a security desk? Better yet, has anyone you know every posted a picture of the keys to the new home they just bought? Well, what if you could take a picture and easily duplicate that key with a 3D Printer? Sound like something from a James Bond film? Well it's not! Better yet, if you can just get a moment alone with a key, you can get an imprint of it in less than 2 minutes, return the key to the owner and then cast a duplicate of that key for later use.", "Key Duplication - It's not just for the movies!", 'Tony Virelli', '2')}>
		            <div className="box">
		              <span className="talk-time">1300</span>
		              <span>Key Duplication - It's not just for the movies!</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1300', '1400', "Cannon Hack Development (CHDK) was initially created to allow features in Canon Cameras such as RAW image output to be available on cameras that came without them.  Since then additional features have been added to CHDK that have made it more useful to many people.  Some of these features are: scripting, high speed photography, 3d pictures, live histograms and many more.  This talk will cover all the steps needed to create an SD card with the CHDK software and show some of the features that makes available.  We'll also talk about some of the other free firmwares available such as 400plus, Spy Lantern and Magic Lantern.", "Unleash your Camera with CHDK", 'Aaron Grothe', '3')}>
								<div className="box">
	              	<span className="talk-time">1300</span>
	              	<span>Unleash your Camera with CHDK</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1400', '1500', "Anyone that knows me also knows that I'm a huge IDA Pro fanboy. Ghidra, the NSA's answer to IDA, has been in the public's hands for about a year now, so where does that leave me?  Still solidly in the IDA camp, but that doesn't mean that Ghidra hasn't had an impact on my life. Thanks to the magic of open source we can take one of Ghidra's nicest features and bolt it onto IDA to fill some gaps in IDA coverage. In this talk, I'll introduce the 'Binary Lifting Component' (it's kinder name), or just blc for short, plugin for IDA.  blc takes the core of Ghidra's decompiler capability and builds an IDA plugin around it to add decompilation capability to IDA for all processors supported by Ghidra.", "How Ghidra changed my life", 'Chris Eagle', '4')}>
								<div className="box">
	              	<span className="talk-time">1400</span>
	              	<span>How Ghidra changed my life</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1400', '1500', "Learn what exactly is SCADA/ICS, why it's important, how horrifyingly ancient it all still is, and how to pentest it without kicking over generators or flooding toxic gases everywhere! If you want to hear jaw dropping stories, lose sleep over chemical plants on your commute, or find that nice job niche that's hiring everywhere now is your chance.", "The Beginner’s Guide to Pentesting ICS:  How NOT to Shut Down A Power Grid", 'Dan Bougere', '2')}>
								<div className="box">
	              	<span className="talk-time">1400</span>
	              	<span>The Beginner’s Guide to Pentesting ICS:  How NOT to Shut Down A Power Grid</span>
	            	</div>
	            </a>

	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1500</span>
	                <span>Break</span>
	              </div>
	            </a>

							<a onClick={this.popModal('Talk', '1520', '1620', "Technology to manage diabetes revolves around stagnated tech from the 80s and 90s. Hackers took their lives into their own hands by developing open source hardware and software to augment inadequate products. Developing and building a DIY artificial pancreas, its iterations, and real-life examples of will be discussed and at least one will be working on the presenter. Taking the human out of the loop and replacing them with technology increases quality of life. See what happens when hackers decide they’re not waiting around for government and the MedTech industry to do better.  Managing diabetes revolves around stagnated tech from the 80s and 90s. Hackers took their lives into their hands by augmenting inadequate products after market. Building iterations of a DIY artificial pancreas and real-life examples of will be discussed and at least one will be working on the presenter. Replacing human intervention with technology betters quality of life. See what happens when hackers decide they’re not waiting around for government and the MedTech industry to do better.", "The DIY Artificial Pancreas: Hacking Wetware with Open Source Software and Hardware", 'Jay Lagorio', '3')}>
								<div className="box">
	              	<span className="talk-time">1520</span>
	              	<span>The DIY Artificial Pancreas: Hacking Wetware with Open Source Software and Hardware</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1520', '1620', "How blue teamers and red teamers think is fundamentally different. This talk will delve into some of those details from a perspective of appreciating the differences – but it will not focus exclusively on them, as it is geared towards how to build a strong security team in general. Some of the aspects of a good blue team is Incident Response team, tuning a SIEM, solidifying network security and other opportunities for a better overall security posture. It will not focus on KU Health system and our systems/solutions, but instead will involve leadership strategies, technical details, and security posturing areas to consider.", "A Red-Teamer's Guide to Building a Blue Team", 'Mark Bayley', '3')}>
								<div className="box">
	              	<span className="talk-time">1520</span>
	              	<span>A Red-Teamer's Guide to Building a Blue Team</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1620', '1720', "While the foray to apply machine learning to information security is new, there remain challenges to creating and accessing datasets that are beneficial to security research. This talk is going to discuss our journey in creating an open-source network security dataset, the community-accepted guidelines to creating good data, and the challenges we faced. Moreover, this talk examines the gap between academic datasets and data released by the professional community before providing resources to new datasets that have been released in neighboring areas.", "Adventures in Creating a Cybersecurity Dataset", 'Heather Lawrence', '2')}>
								<div className="box">
	              	<span className="talk-time">1620</span>
	              	<span>Adventures in Creating a Cybersecurity Dataset</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1620', '1720', "Charles Dickens is quoted as saying, 'A very little key will open a very heavy door.' Physical penetration testing is often overlooked when it comes time for a company's annual security assessment. Oftentimes, physical is left out for even a full-scope Red Team exercise. I've heard all of the reasons (excuses) why: 'we have guards,' 'we have locks,' 'card reader access,' 'we know it's an issue, just not a priority,' or 'it seems like cheating,' and the list goes on. I am here to discuss why Physical Penetration Testing/Physical Red Teaming is not only beneficial, but also crucial to a company's security well-being. I will review what physical red teaming is, how physical red teaming differs from traditional physical penetration tests, some of the tactics used in bypassing physical security controls, how closely tied physical security is to the overall posture and effectiveness of security training programs and policies, and will give several scenarios in which a physical intrusion opened several more doors (pun intended) during Red Team excursions.", "Let The Right One In", 'David Boyd', '2')}>
								<div className="box">
	              	<span className="talk-time">1620</span>
	              	<span>Let The Right One In</span>
	            	</div>
	            </a>

            </div>
        	</div>
        }

        {this.state.showSaturday &&
        	<div>
        		<div className='schedule'>{`Tentative ${day} Speaking Schedule`}</div>
        		<div className='grid-wrapper-saturday'>
	            <div className="track">Bat of Doom</div>
	            <div className="track">Terrified Chipmunk</div>
	            <a className="both-tracks"
	            	onClick={this.popModal('Registration Open', '0730', '1720', 'Registration will be in the courtyard area until Friday Keynote and located at the store between the two main tracks.')}>
	              <div className="box">
	                <span className="talk-time">0730</span>
	                <span>Registration Open</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Opening Remarks', '0850', '0900', 'Opening Remarks from Kernelcon Organizers.')}>
	              <div className="box">
	                <span className="talk-time">0850</span>
	                <span>Opening Remarks</span>
	              </div>
	            </a>
	            <a className="both-tracks"
	            	onClick={this.popModal('Keynote', '0900', '1000', "Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks. There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it. However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly. To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.", 'In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains', "Sophia d'Antoine")}>
	              <div className="box">
	                <span className="talk-time">0900</span>
	                <span>Keynote: Sophia d'Antoine</span>
	              </div>
	            </a>
	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1000</span>
	                <span>Break (15 min room switch)</span>
	              </div>
	            </a>


	            <a onClick={this.popModal('Talk', '1015', '1115', "Building a vulnerability management program often feels like eating an elephant that’s guarded by sharks — every time you try to take a bite, you’re dodging someone that’s trying to take a bite out of you. I am going to walk you through building an effective vulnerability management program: avoiding and mitigating common problems, navigating the organizational waters, and getting the most bang for your buck when it comes to reducing your risk. Vulnerability management is more than just running a scan and putting in tickets for remediation — it’s about managing the people involved in the scanning and remediation processes and finding a middle ground that reduces your risk and makes operations happy.", 'Building a Vulnerability Management Program - Avoiding Pitfalls, Managing Risk, and Mastering CYA', 'Megan Benoit', '3')}>
								<div className="box">
	              	<span className="talk-time">1015</span>
	              	<span>Building a Vulnerability Management Program - Avoiding Pitfalls, Managing Risk, and Mastering CYA</span>
	            	</div>
	            </a>
	            <a onClick={this.popModal('Talk', '1015', '1115', "As organizations move their traditional on-prem environments to the cloud, penetration testing tools and techniques must also adapt. This talk will highlight the top 10 tools every penetration tester should add to their arsenal when performing a penetration assessment against a cloud environment. Tools covered will work against Azure/Office 365, Google Cloud/G Suite, and AWS.", 'The Top 10 Tools For Cloud Penetration Testing', 'Michael Born', '2')}>
								<div className="box">
	              	<span className="talk-time">1015</span>
	              	<span>The Top 10 Tools For Cloud Penetration Testing</span>
	            	</div>
	            </a>


							<a onClick={this.popModal('Talk', '1115', '1135', "'How do I find a job in cybersecurity?' This is an issue for both new and experienced professionals. There continues to be a disconnect between those hiring and those looking.  This session explains solutions to overcome the cybersecurity hiring gap. Whether attendees are looking to break into cybersecurity or land their next job, they can use hacker skills to make it happen. In this session, I’ll explain three traits of a well-rounded cybersecurity professional, three areas for balanced learning, and steps for hacking your career including visualizing your goals, knowing the best path for you, social engineering your next boss, active learning and keeping your skills sharp. This session also presents the difference cybersecurity career paths based on the NIST National Initiative for Cybersecurity Education (NICE). To get the right job, use hacking techniques to break through the hiring process.  Learn how here.", 'Hacking your Cybersecurity Career', 'Ron Woerner', '1')}>
	            	<div className="box">
	              	<span className="talk-time">1115</span>
	              	<span>Hacking your Cybersecurity Career</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1115', '1135', "Ever wanted to steal passwords and run other programs in seconds with only a small USB sized tool? No? Well, now you can! The Bash Bunny will allow you to program keystroke attacks, which then are executed at lightning speed once you plug it in. In this talk you will learn the basics of this device and a few programs.", 'Bash Bunny Basics', 'Anthony Bernard', '1')}>
		            <div className="box">
		              <span className="talk-time">1115</span>
		              <span>Bash Bunny Basics</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1135', '1155', "Open", '', '', '')}>
		            <div className="box">
		              <span className="talk-time">1135</span>
		              <span>Open</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1135', '1155', "When CBOE (Chicago Board Options Exchange) acquired Bats Global Markets, senior management decided to move forward with Bats technology.  The plan was straightforward:  decommission legacy CBOE systems.  However, 40+ years without documentation, and the handful of folks who knew systems dependencies leaving the company, Cboe's security operations turned to me.", 'Adventures with McAfee: Powering down McAfee ePO at Cboe Global Markets', 'W. S. Cheng', '3')}>
		            <div className="box">
		              <span className="talk-time">1135</span>
		              <span>Adventures with McAfee: Powering down McAfee ePO at Cboe Global Markets</span>
		            </div>
	            </a>

	            <a className="both-tracks" onClick={this.popModal('Break for Lunch', '1155', '1300', "We break for lunch and encourage you to try out one of our hundreds of downtown Omaha restaurants!", '')}>
		            <div className="box">
		              <span className="talk-time">1155</span>
		              <span>Break for Lunch</span>
		            </div>
	            </a>

							
							<a onClick={this.popModal('Talk', '1300', '1400', "This talk explores attacking various 'secondary contexts' in web applications where data is being passed to an underlying internal HTTP server.  We will explore the different approaches to targeting limited-access/internal APIs, the very strange interactions between different servers within the stack, and lastly the different types of vulnerabilities present in second stage HTTP services.", "Attacking Secondary Contexts in Web Applications", 'Sam Curry', '3')}>
		            <div className="box">
		              <span className="talk-time">1300</span>
		              <span>Attacking Secondary Contexts in Web Applications</span>
		            </div>
	            </a>
							<a onClick={this.popModal('Talk', '1300', '1400', "The first step of a Penetration Test is often called Reconnaissance, Information Gathering or OSINT. During this step, Penetration Testers attempt to gather as much information as they can about a target environment by using publicly available information. Unfortunately, this step may be ignored or not completed thoroughly.  This is intended to be a 101-level presentation in which we discuss how an attacker may conduct reconnaissance against a target, and what specific information they might be interested in gathering. We will cover specific tools including theHarvester, Shodan, Recon-ng and more. This presentation is intended to give Security Professionals and Administrators an understanding of how attackers conduct information gathering against environments. Audience members will see specific examples of tools and techniques that they can apply to their own environments. We will not cover any new or novel techniques, but my goal is to provide the audience with the knowledge to gather meaningful information quickly.", "Getting started with OSINT", 'Jamie Maguire', '2')}>
								<div className="box">
	              	<span className="talk-time">1300</span>
	              	<span>Getting started with OSINT</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1400', '1500', "These days, everyone is looking for the phish that is either a generic drive-by or a more targeted campaign, such as a weaponized ransomware attack. Blue teams are smarter, instrumentation is smarter, and detection capabilities have advanced; especially in enterprise networks.  Further, set aside all of the click-through/pre-manufactured commodity phishing security awareness services for a moment. The real question, what happens when adversaries aren’t so brazen with their tactics and take smarter steps to counter detection?  Pre-emptive strike campaigns that are both innocuous (almost forgettable) to glean target details before the real attack, the correct tooling to prevent prying defenders from reaching the command and control redirectors or malware servers, blacklists and whitelists, domain registration misdirection, and quite possibly peering into the void of the vast amounts of signal-to-noise honeypot data trawling the Internet while using it to become more situationally aware.  The operators at STACKTITAN will discuss all of these topics and how proprietary tooling has helped shift their perspective on effective phishing techniques. Additionally, REAL mitigation techniques will be discussed to better prepare organizations to defend against these attack campaigns. In conclusion, the presentation will be informative with plenty of opportunity for collaborative discussion.", "Better Phishing through Smarter Infrastructure", 'Chris Patten and Dan Kottmann', '3')}>
								<div className="box">
	              	<span className="talk-time">1400</span>
	              	<span>Better Phishing through Smarter Infrastructure</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1400', '1500', "Small and Medium businesses are prime targets for malicious actors. Lacking the budgetary freedom that larger businesses may have for cyber security and limited personnel resources presents a large bullseye on many small and medium business. This talk addresses various free or built-in options for an organization to use to protect their systems from cyber attacks and reduce their attackable surface.", "Protecting your Small or Medium Business from Cyber Attacks", 'Jeff Struik', '2')}>
								<div className="box">
	              	<span className="talk-time">1400</span>
	              	<span>Protecting your Small or Medium Business from Cyber Attacks</span>
	            	</div>
	            </a>

	            <a className="both-tracks">
	              <div className="box">
	                <span className="talk-time">1500</span>
	                <span>Break</span>
	              </div>
	            </a>


							<a onClick={this.popModal('Talk', '1520', '1620', "Barriers can slow us down from reaching our goals but they don’t have to block us. The key is not letting the gates stop you in your tracks and instead finding a way around or through them. This is hard enough without throwing in the introversion and imposter syndrome common to our industry.  Join me while I walk through my journey overcoming the challenges of being an introvert trying to learn while overcoming the imposter syndrome that says I can't. You'll walk away with strategies to create opportunities that will showcase your strengths and ways to overcome the internal monologue that forever tells us we can't.", "Breaking barriers: An introvert's story to InfoSec", 'Ryen Macababbad', '1')}>
								<div className="box">
	              	<span className="talk-time">1520</span>
	              	<span>Breaking barriers: An introvert's story to InfoSec</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1520', '1620', "Having to start over again after being fired from a 5-year job, I saw the trend of hacks and saw that cybersecurity was going to be a low unemployment industry. I went back to college and started this new career path at the age of 34. This presentation will showcase the path I have made going from graduating college with a BSIT degree and zero industry experience to getting a SoC analyst job to becoming a project engineer inside of 1 year from date of hire.", "Bit to Byte", 'Christopher Wright', '1')}>
								<div className="box">
	              	<span className="talk-time">1520</span>
	              	<span>Bit to Byte</span>
	            	</div>
	            </a>

							<a onClick={this.popModal('Talk', '1620', '1720', "Over the course of the past year A large percentage of time has been invested into developing a Virtual Processor that has its own unique Architecture. The architecture was designed and implemented by Jacob Mohrbutter specifically for the Kernelcon 2020 CTF. The goal of the project was to build an esoteric language with a limited set of primitive instructions that could be used to build uniquely difficult challenges for even the most technically affluent individuals. This Talk provides an overview of various aspects of the design, implementation, and inspiration that lead to the development of the Emoji Assembler.", "Emoji Assembler: Trolling the CTF", 'Jacob Mohrbutter', '5')}>
								<div className="box">
	              	<span className="talk-time">1620</span>
	              	<span>Emoji Assembler: Trolling the CTF</span>
	            	</div>
	            </a>
							<a onClick={this.popModal('Talk', '1620', '1720', "Cyber Security is an exceedingly complex space that requires extreme levels of investment in people, processes, and technology to make a large impact on an organization. Despite the investment, we often sit in the 'spin zone' and accept the status quo and lack of progress. However, there are parallels we can draw from other complex fields (in this case healthcare) to help us consider fundamental or alternative methods for solving the complex security issues we face. Join me in understanding the similarities between patient wellness and Cyber Security and the opportunities that lie ahead for us to improve our capabilities.", "Bio Hack: How Integrative Medicine principles can change the game in Cyber Security", 'Joseph Wilson', '3')}>
								<div className="box">
	              	<span className="talk-time">1620</span>
	              	<span>Bio Hack: How Integrative Medicine principles can change the game in Cyber Security</span>
	            	</div>
	            </a>

	            <a className="both-tracks"
	            	onClick={this.popModal('Closing Ceremonies', '1720', '1820', "Join us for closing ceremonies where we award our Eternal Kernel badges and celebrate the con that was.", "Own the Con", 'Kernelcon Organizers')}>
	              <div className="box">
	                <span className="talk-time">1720</span>
	                <span>Own the Con, Closing Ceremonies, and Awards</span>
	              </div>
	            </a>
	          </div>
        	</div>
        }




				<div className='talks'>
					<h2>Talks</h2>
					{talks}
				</div>
			</div>
    );
  }
}

export default TalksSchedule;

