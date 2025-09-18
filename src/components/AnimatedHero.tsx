import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-cat.png";

const AnimatedHero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const texts = ['New Scripter', 'Gamer', 'New Designer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === texts[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setCurrentText(texts[currentIndex].substring(0, currentText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCurrentText(texts[currentIndex].substring(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleResumeClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 === 15) {
      setShowModal(true);
      setClickCount(0);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image with Float Animation */}
        <div className="mb-8 flex justify-center">
          <img
            src={profileImage}
            alt="Twab Profile"
            className="w-40 h-40 rounded-full border-4 border-primary/30 shadow-lg shadow-primary/20 
                     animate-float hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* GIANT VISIBLE TITLE */}
        <h1 className="text-9xl md:text-[12rem] font-black mb-12 text-center
                       bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
                       bg-clip-text text-transparent animate-pulse">
          🔥 TWAB 🔥
        </h1>

        {/* Subtitle with Typing Animation */}
        <div className="text-2xl md:text-4xl font-light mb-12 h-16 flex items-center justify-center">
          <span className="mr-4">Hi! I am Twab and I am a</span>
          <span className="text-primary font-bold min-w-[300px] text-left">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover-scale border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hover-scale border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Skills
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hover-scale border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact
          </Button>
          <Button 
            size="lg"
            className="hover-scale bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
            onClick={handleResumeClick}
          >
            Resume
          </Button>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
             onClick={() => setShowModal(false)}>
          <div className="bg-card p-8 rounded-2xl border border-primary/30 text-center max-w-sm mx-4"
               onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-primary mb-4">CONGRATS!</h2>
            <img 
              src="/soggy-cat.png" 
              alt="Soggy Cat" 
              className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
            />
            <p className="text-lg font-semibold">YOU FOUND SOGGY CAT!</p>
            <Button 
              className="mt-4" 
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnimatedHero;