import * as React from 'react';
import { useEffect } from 'react';
import { getTags } from '../../../../redux/actions/tags';
import { useDispatch, useSelector } from 'react-redux';
import Classes from "./FormM1Tags.module.css"


const FormM2Tags = ({ setTag, tag }) => {
    const dispatch = useDispatch();
    const allTags = useSelector(state => state.tagsReducer.tags);


    const [tagsM4, setTagsM4] = React.useState([])
    const mtags = allTags.slice(50, 57);


    useEffect(() => {
        dispatch(getTags());
        setTagsM4(mtags)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])


    function handleCheckTags(e) {
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
    // console.log(tagsM4)
    return (
        <React.Fragment>
            {/* <div className={Classes.containG}> */}

            <div className={Classes.tags}>
                {
                    tagsM4.map((g) => (
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
export default FormM2Tags