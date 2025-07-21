import profileImage from "@/assets/profile-cat.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">
              twab.dev
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mb-16">
            <nav className="flex gap-8">
              <a href="#about" className="text-primary font-medium border-b-2 border-primary pb-2">
                About Me
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
            </nav>
          </div>

          {/* About Section */}
          <div id="about" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Me
                <div className="w-16 h-1 bg-primary mt-2"></div>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hi, I'm twab. A developer from Netherlands who enjoys scripting and gaming. 
                I'm still learning but I love working on projects and figuring out how things work.
              </p>
              
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                View contact
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full border-4 border-primary overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;