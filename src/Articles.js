import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { getArticles } from './action';

const styles = {
    cursor: 'pointer'
}
class Articles extends Component {

    articleHandler = (e) => {
        this.props.getArticles();
    }

    
    render() {
        const { articles} = this.props;
        console.log(articles)
        return (
            <div> 
                 <button className="btn btn-primary" style={styles} onClick={(e) => this.articleHandler(e)}>Get Articles</button><br/><br/>
                 <ul class="list-group">
                    {
                        articles && articles.map((item,i) => {
                            return (
                                <Fragment>
                                    <li class="list-group-item">{item.title}</li>
                                </Fragment>   
                                )
                            })
                    }
                </ul>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.getArticles.articles
});



const mapDispatchToProps =(dispatch) => ({
    getArticles: () => {dispatch(getArticles())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
