import s from './Info.module.css'

const Info = (props) => {
    return (
        <div className={s.profileInfo}>
            <p className={s.userName}>{props.profile.fullName}</p>
            <p className={s.status}>{props.profile.aboutMe}</p>
            <hr />
            <div className={s.info__item}>
                <p className={s.name}>
                    Date of birth:
                </p>
                <span className={s.value}>
                    1 November
                </span>
            </div>
            <div className={s.info__item}>
                <p className={s.name}>
                    City:
                </p>
                <span className={s.value}>
                    Zaporizhzhya
                </span>
            </div>
            <div className={s.info__item}>
                <p className={s.name}>
                    Education:
                </p>
                <span className={s.value}>
                    ZNTU
                </span>
            </div>
            <div className={s.info__item}>
                <p className={s.name}>
                    Web Site:
                </p>
                <span className={s.value}>
                    {props.profile.contacts.website ? props.profile.contacts.website : 'None'}
                </span>
            </div>
            <div className={s.info__item}>
                <p className={s.name}>
                    Socials: <ul>
                        <li>Facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'None'}</li>
                        <li>YouTube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : 'None'}</li>
                        <li>Twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'None'}</li>
                        <li>Instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'None'}</li>
                        <li>GitHub: {props.profile.contacts.github ? props.profile.contacts.github : 'None'}</li>
                    </ul>
                </p>
            </div>
            <div className={s.info__item}>
                <p>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No' }</p>
            </div>
            <div className={s.info__item}>
                <p>Looking for a job description: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'No Description' }</p>
            </div>
        </div>
    );
}

export default Info;