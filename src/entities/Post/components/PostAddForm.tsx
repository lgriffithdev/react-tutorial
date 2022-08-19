import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreatePostMutation } from '@/services/posts';
import { useContext } from 'react';

import { StoreContext } from '@/components/StoreContext';

type Props = {
    url: string,
}

const PostAddForm: FC<Props> = ({ url, }) => {
    const [createPost, result] = useCreatePostMutation();

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            userId: 1,
        },
        validationSchema: Yup.object({
           title: Yup.string()
               .required('Ce champ est requis'),
           content: Yup.string()
               .required('Ce champ est requis'),
        }),
        onSubmit: values => {
            createPost(values);
        }
    });

    // Privilégier cette méthode pour consommer data

    return (
        <>
            <StoreContext.Consumer>
                {
                    () => (
                        <div>
                            { result.isSuccess &&
                                <div className={'text-green-500'}>Vous avez bien créé un post</div>
                            }
                            <form onSubmit={formik.handleSubmit}>
                                <div className={'flex flex-col gap-y-sm mb-2'}>
                                    <label htmlFor={'title'}>Title</label>
                                    <input
                                        type={'text'}
                                        id={'title'}
                                        className={'border border-black w-fit'}
                                        {...formik.getFieldProps('title')}
                                    />
                                    {formik.touched.title && formik.errors.title ? (
                                        <div className={'text-red-500'}>{formik.errors.title}</div>
                                    ) : null}
                                </div>

                                <div className={'flex flex-col gap-y-sm mb-2'}>
                                    <label htmlFor={'title'}>Content</label>
                                    <input
                                        type={'text'}
                                        id={'content'}
                                        className={'border border-black w-fit'}
                                        {...formik.getFieldProps('content')}
                                    />
                                    {formik.touched.content && formik.errors.content ? (
                                        <div className={'text-red-500'}>{formik.errors.content}</div>
                                    ) : null}
                                </div>

                                <button className={'p-2 bg-orange-500 text-white uppercase font-bold rounded'} type={'submit'}>Submit</button>
                            </form>
                        </div>
                    )
                }
            </StoreContext.Consumer>
        </>

    )
}

export default PostAddForm;
