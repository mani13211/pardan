import React from 'react'
import Link from 'next/link'
import Mobileheader from './components/mobileheader'
import Navbar from './components/navbar'
function About() {
    return (
        <div className='main '>
            <Mobileheader />
            <Navbar />
            <div className='container mt-3'>
                <h1>About Me</h1>
                <h2>Introduction</h2>
                <p>Hello, I'm Smile Sardarni, a passionate sketch artist specializing in creating intricate and detailed artworks. With a keen eye for capturing emotions and an innate love for art, I strive to bring stories to life through my sketches.</p>
                <h2>Background</h2>
                <p>Ever since I can remember, I have been fascinated by the power of visual expression. As a child, I would spend hours with my sketchbook, capturing the beauty of the world around me. Over the years, my love for sketching grew, and I decided to pursue it as a professional career.</p>
                <h2>Artistic Style</h2>
                <p>My artistic style is characterized by a blend of realism and creativity. I am adept at capturing intricate details, which allows me to breathe life into my sketches. Each stroke of my pencil is carefully placed to convey the essence and emotions of the subject.</p>
                <h2>Inspiration</h2>
                <p>Inspiration comes to me from various sources, including nature, human experiences, and everyday life. I believe that art has the power to evoke emotions, tell stories, and inspire change. It is this belief that drives me to create meaningful and thought-provoking sketches.</p>
                <h2>Services</h2>
                <p>As a sketch artist, I offer a range of services to cater to different needs:</p>
                <ul>
                    <li>Custom Portraits: Immortalize your loved ones or yourself with a personalized portrait.</li>
                    <li>Character Design: Bring your imagination to life with unique character designs for books, comics, or animations.</li>
                    <li>Illustrations: Add a touch of creativity to your projects with captivating illustrations.</li>
                    <li>Art Classes: Share my knowledge and passion for sketching through interactive art classes.</li>
                </ul>
                <h2>Clientele</h2>
                <p>Over the years, I have had the pleasure of working with a diverse clientele, including individuals, businesses, and organizations. Whether it's a commissioned artwork or collaborating on a creative project, I ensure that each client's vision is brought to fruition.</p>
                <h2>Get in Touch</h2>
                <p>If you are interested in my work or have any inquiries, please don't hesitate to reach out. I am always excited to collaborate and create something remarkable together.</p>
                {/* <p>Email: info@raksharma.com</p>
                <p>Phone: +1234567890</p> */}
                 <Link href="contact" >
                                  <i className='text-sm'>Contact Us</i> 
                                </Link>
            </div>
        </div>
    )
}

export default About