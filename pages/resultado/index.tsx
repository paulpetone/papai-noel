import { useRouter } from "next/router"

const Result = () => {
    const { query: {success} } = useRouter()
    console.log(success)
    return success === 'true' ? <h2>Tu recebe-rás presentes (:</h2> : <h2>No, no no no... Only prensado pra você :(</h2>
    
}

export default Result