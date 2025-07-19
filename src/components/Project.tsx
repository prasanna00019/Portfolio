import k from '../assets/images/fit-nest.png';
import crypto from '../assets/images/crypto.png';
import finetuning from '../assets/images/fine-tuning.png';
import rag from '../assets/images/rag.png';
import aiAgents from '../assets/images/ai-agents.png';
import '../assets/styles/Project.scss';
// import ShinyText from './ShinyText/ShinyText';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
{/* <ShinyText  text="Just some shiny text!" disabled={false} speed={5} className='custom-class' /> */}
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/prasanna00019/CHAT-APP-FULL-STACK" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/prasanna00019/CHAT-APP-FULL-STACK/main/frontend/src/assets/Screenshot%202024-11-24%20193155.png
" className="zoom" alt="thumbnail" width="100%" height={"70%"}/></a>
                <a href="https://github.com/prasanna00019/CHAT-APP-FULL-STACK" target="_blank" rel="noreferrer"><h2>Full stack Chat App(WhatsApp clone) </h2></a>
                <p>A feature-rich, full-stack chat application using MERN stack offering seamless one-to-one and group chat functionalities, along with an engaging Stories feature. Designed to provide a WhatsApp-like experience</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasanna00019/LEETCODE-CLONE-FULL-STACK" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/prasanna00019/LEETCODE-CLONE-FULL-STACK/main/frontend/src/assets/leetcode-ss-1.png" className="zoom" alt="thumbnail" width="100%" height={"70%"}/></a>
                <a href="https://github.com/prasanna00019/LEETCODE-CLONE-FULL-STACK" target="_blank" rel="noreferrer"><h2>Full Stack LeetCode Clone</h2></a>
                <p>A full-stack LeetCode-inspired platform designed for coding practice, problem-solving, and performance tracking. Built using the MERN stack, this project replicates core features of the original platform, delivering a seamless and interactive experience for users.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasanna00019/AI-Agents-Hub" target="_blank" rel="noreferrer"><img src={aiAgents} className="zoom" alt="thumbnail" width="100%" height={"60%"}/></a>
                <a href="https://github.com/prasanna00019/AI-Agents-Hub" target="_blank" rel="noreferrer"><h2>AI Agents Hub</h2></a>
                <p> A repository which contains all projects related to AI Agents. Collection of powerful, intelligent, and agentic LLM-based systems designed to solve real-world tasks using tools, memory, and reasoning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasanna00019/RAG-Playground" target="_blank" rel="noreferrer"><img src={rag} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/prasanna00019/RAG-Playground" target="_blank" rel="noreferrer"><h2>RAG Playground</h2></a>
                <p>A curated collection of RAG (Retrieval-Augmented Generation) projects covering foundational to advanced techniques, including prompt routing, agentic reasoning, and many more</p>
            </div>
             <div className="project">
                <a href="https://github.com/prasanna00019/Fine-Tuning-LLMs" target="_blank" rel="noreferrer"><img src={finetuning} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/prasanna00019/Fine-Tuning-LLMs" target="_blank" rel="noreferrer"><h2>Fine Tuning LLMs</h2></a>
                <p>A collection of hands-on fine-tuning experiments on large language models (LLMs) like GPT-2(later will extend for other models too).</p>
            </div>
                <div className="project">
                <a href="https://github.com/prasanna00019/Crypto-Toolkit-Scratch" target="_blank" rel="noreferrer"><img src={crypto} className="zoom" alt="thumbnail" width="100%"
                height={"60%"}/></a>
                <a href="https://github.com/prasanna00019/Crypto-Toolkit-Scratch" target="_blank" rel="noreferrer"><h2>Crypto-Toolkit-Scratch</h2></a>
                <p>A comprehensive repository of cryptographic algorithms implemented from scratch in Python. This project covers a wide range of encryption, decryption, and hashing techniques.</p>
            </div>
        </div>
         <h1>Hackathon Projects</h1>
            <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/prasanna00019/OneSeen" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/prasanna00019/OneSeen/master/frontend/src/assets/demo.png"className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/prasanna00019/OneSeen" target="_blank" rel="noreferrer"><h2>OneSeen</h2></a>
                <p> Fully anonymous platform where users can post confessions, send self-destructing secret messages, and experience complete privacy. Messages can only be viewed once and will disappear forever after being read or after 24 hours if unopened.</p>
            </div>
            <div className="project">
                <a href="https://github.com/prasanna00019/HackGenesis-25" target="_blank" rel="noreferrer"><img src="https://media.licdn.com/dms/image/v2/D4D2DAQFMY50tOeE8PQ/profile-treasury-image-shrink_800_800/B4DZcLSTcTG0AY-/0/1748241051473?e=1753272000&v=beta&t=9UgXXBhOlJpoGGd2JBflcWBgLrkwQjGq3fC06A1qDNY" className="zoom" alt="thumbnail" width="100%"
                height={"60%"}/></a>
                <a href="https://github.com/prasanna00019/HackGenesis-25" target="_blank" rel="noreferrer"><h2> Mood Maps</h2></a>
                <p>MoodMaps investigates the transformative impact of yoga, meditation, and spirituality — offering a pathway to inner calm, self-discovery, and overall well-being.</p>
            </div>
        </div>
        <h1>Internship Projects </h1>
           <div className="projects-grid">
            <div className="project">
                <a href="https://www.fit-nest.in" target="_blank" rel="noreferrer"><img src={k} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.fit-nest.in/" target="_blank" rel="noreferrer"><h2>Fit-Nest</h2></a>
                <p>Fit-Nest is a comprehensive platform designed to streamline gym operations and enhance user engagement.
Features include (hosted at www.fit-nest.in 2): 1)Admin Portal: An intuitive interface for admins to manage
website operations, including equipment inventory, product listings, trainer profile, and revenue tracking.
2)Members can log in to access services, request trainers, and purchase products seamlessly.</p>
            </div>
        </div>

    </div>
    );
}

export default Project;