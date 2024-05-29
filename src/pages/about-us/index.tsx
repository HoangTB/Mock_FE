// About.tsx
import React from 'react';
import styles from './styles.module.css';

const About = () => {
  return (
    <>
      <div className={styles[`about-img`]}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <img src="images/logo.png" alt="logo" />
          <h2>About Us</h2>
          <p className={styles.intro}>
            At FHotel, we believe that every journey deserves a perfect destination. Nestled [insert location], our
            hotel offers an exquisite blend of luxury, comfort, and convenience, making it the ideal choice for both
            leisure and business travelers alike
          </p>

          <ul>
            <li>
              <h3>Our Philosophy</h3>
              <p>
                At FHotel Name, we are committed to excellence in every aspect of our service. From the moment you step
                through our doors, you will be greeted with warmth and hospitality that reflects the rich cultural
                heritage of our region. We strive to anticipate and exceed your every need, ensuring that your stay with
                us is nothing short of extraordinary.
              </p>
            </li>
            <li>
              <h3>Our Accommodation</h3>
              <p>
                Indulge in luxury and comfort with our range of accommodation options, designed to cater to the diverse
                needs of our guests. Whether you prefer the spacious elegance of our suites or the cozy comfort of our
                deluxe rooms, each of our accommodations is meticulously appointed with modern amenities and thoughtful
                touches to ensure a relaxing stay.
              </p>
            </li>
            <li>
              <h3>Dining Experience</h3>
              <p>
                Savor the flavors of the world at our exquisite dining establishments, where culinary mastery meets
                impeccable service. From fine dining to casual fare, our restaurants offer a tantalizing array of
                cuisines to tempt your palate, prepared with the freshest ingredients and served with flair.
              </p>
            </li>
            <li>
              <h3>Events and Meetings</h3>
              <p>
                Host your next event or meeting with us and experience the perfect blend of sophistication and
                convenience. Our versatile event spaces are equipped with state-of-the-art technology and supported by a
                team of experienced professionals dedicated to ensuring the success of your event.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
