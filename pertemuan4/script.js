// function Hello() {
//     const nama = "okita"
//     return(
//         <div>
//             <Navbar />
//             <h2>Hello {nama}</h2>
//             <p></p>
//         </div>
//     )
// }

// function Navbar() {
//     return(
//         <ul>
//             <li>Home</li>
//             <li>profile</li>
//             <li>setting</li>
//             <li>about</li>
//         </ul>
//     )
// }
const Home = () => {
    const Heros = "Hero mobile legend"
    return(
        <div>
            <Navbar />
            <Hero data={Heros}/>
            <Footer />
        </div>
    )
}

const Navbar = () => {
    
    const itemNavbar = ['Home', 'Profile', 'About']
    return(
        <div>
            <ul>
                {
                    itemNavbar.map((item) => <li>{item}</li>)
                }
            </ul>
        </div>
    )
}

const Hero = (props) => {
    const {data} = props
    
    return(
        <div>
            <h2>Mobile legend</h2>
        </div>
    )
}

const Footer = () => {
    const author = "PeTIK Jombang"
    return(
        <div>
            <h5>Copyright by {author}</h5>
        </div>
    )
}

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement)

root.render(<Home />)