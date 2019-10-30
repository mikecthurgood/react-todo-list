import React from 'react'

class Filter extends React.Component {

    // categoryButtonClick() {
    //     this.props.onSelectCategory

    // }

    render() {
        const categories = this.props.data

        return (
            <div className="categories">
                {categories.map(cat => <button
                    className={this.props.categorySelection === cat ? 'selected' : null}
                    onClick={this.props.onSelectCategory}
                >{cat}</button>)}
            </div>
        )


    }
}
export default Filter