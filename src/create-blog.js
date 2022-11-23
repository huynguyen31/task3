import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';
import { FormCheckout } from './ui-components';

Amplify.configure(config);

function CreateBlog() {
    return (
        <div>
            <FormCheckout></FormCheckout>
        </div>
    )
}

export default CreateBlog;