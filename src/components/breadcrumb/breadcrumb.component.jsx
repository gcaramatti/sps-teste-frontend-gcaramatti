import { Link } from 'react-router-dom'

export function Breadcrumb({ title, className }) {
    return(
        <div className='text-text w-fit py-[15px] a:text-primary'>
            {title === undefined &&
            <div className={className ? className : 'font-bold'}>
                Home
            </div>
            }
            {title  &&
                <div className={className ? className : ''}>
                    <Link to="/" className='font-bold'>Home</Link>{` > ${title}`}
                </div>
            }          
        </div>
    )
  }