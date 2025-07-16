import { Github, Linkedin, Twitter } from 'lucide-react';

export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-xl text-center space-y-4">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://avatars.githubusercontent.com/u/159623027?v=4https://avatars.githubusercontent.com/u/159623027?v=4" // Replace with your photo
        alt="Profile"
      />
      <div>
        <h2 className="text-xl font-semibold">Your Name</h2>
        <p className="text-gray-500">Frontend Developer</p>
      </div>
      <div className="flex justify-center gap-4 text-blue-500">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
      </div>
    </div>
  );
}
