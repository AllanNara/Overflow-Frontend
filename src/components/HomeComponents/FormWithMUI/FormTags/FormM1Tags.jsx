import * as React from 'react';
import { useEffect } from 'react';
import { getTags } from '../../../../redux/actions/tags';
import { useDispatch, useSelector } from 'react-redux';
import Classes from "./FormM1Tags.module.css"


const FormM1Tags = ({ setTag, tag }) => {
    const dispatch = useDispatch();
    const allTags = useSelector(state => state.tagsReducer.tags);


    const [tagsM1, setTagsM1] = React.useState([])
    const mtags = allTags.slice(0, 8);

    useEffect(() => {
        dispatch(getTags());
        setTagsM1(mtags)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])


    function handleCheckTags(e) {
        // if (tag.tags.length > 3) {
        //     alert('puedes seleccionar máximo 2 tags')
        // }
        if (e.target.checked) {
            setTag({
                ...tag,
                tags: [...tag.tags, e.target.value],
            });
        }
        else if (!e.target.checked) {
            setTag({
                ...tag,
                tags: tag.tags.filter((p) => p !== e.target.value),
            });
        }
    }

    // console.log(state)
    // console.log(tag.tags)
    return (
        <React.Fragment>
            {/* <div className={Classes.containG}> */}

            <div className={Classes.tags}>
                {
                    tagsM1.map((g) => (
                        <div key={g.id}>
                            <input
                                type="checkbox"
                                onClick={(e) => handleCheckTags(e)}
                                value={g.name}
                                name="tags"
                                key={g.id}
                            />{g.name}
                        </div>
                    ))
                }
            </div>
            {/* </div> */}
        </React.Fragment>
    );
}
export default FormM1Tags