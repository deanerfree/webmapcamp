// import "./App.css"
import { useState } from "react"
import MainContainer from "./components/MainContainer"
import ParkCampContext from "./context/parkCampContext"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

function App() {
	const [webTheme, setWebTheme] = useState(theme)
	return (
		<ParkCampContext>
			<ThemeProvider theme={webTheme}>
				<MainContainer />
			</ThemeProvider>
		</ParkCampContext>
	)
}

export default App
