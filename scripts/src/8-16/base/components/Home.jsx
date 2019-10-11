import React from "react"
import { connect } from "react-redux"
import { Toptitle, Maintitle } from "./homestyle"
const Home = (props) => {
    console.log(props)
    const { languages, pageContent, lang, onSelectLang } = props
    return <div>
        <Toptitle>
            <select value={lang} onChange={onSelectLang} >
                {
                    languages.map((item) => {
                        return <option value={item.id} key={item.id}>{item.label}</option>
                    })
                }
            </select>
            <p>{pageContent.topTitle}</p>
        </Toptitle>
        <Maintitle>
            <p>{pageContent.mainTitle}</p>
        </Maintitle>
    </div>
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectLang({ target }) {
            dispatch({
                type: "onSelectLang",
                value: target.value
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)