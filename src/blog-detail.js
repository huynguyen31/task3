import { ProductDetail } from './ui-components'
import { Amplify } from 'aws-amplify';
import config from './aws-exports'
import { useParams } from 'react-router';

Amplify.configure(config)

function BlogDetail() {
    let {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>ID: {id}</h1>
            <ProductDetail>{id}</ProductDetail>
        </div>
    )  
}

export default BlogDetail;