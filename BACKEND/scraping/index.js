import axios from 'axios'
import cheerio from 'cheerio'


const url = 'https://fipu.unipu.hr/fipu/o_fakultetu/nastavnici'

let data = async () => {
    let html = await axios.get(url)
    let $ = cheerio.load(html.data)
}