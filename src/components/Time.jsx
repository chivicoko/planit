import styles from '../style.module.css';
import '../DatetimePickerStyles.css';
import {useSession, useSupabaseClient, useSessionContext} from '@supabase/auth-helpers-react';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';


const Time = () => {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");

    const session = useSession(); // tokens, when session exists, we have a user
    const supabase = useSupabaseClient(); // talk to supabase
    const {isLoading} = useSessionContext();

    if (isLoading) {
        return <></>;
    }

    const googleSignIn = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        });

        if (error) {
            alert("Error logging in to Google provider with Supabase");
            console.log(error);
        }
    }

    const signOut = async () => {
        await supabase.auth.signOut();
    }

    const createCalendarEvent = async () => {
        const event = {
            'summary': eventName,
            'description': eventDescription,
            'start': {
                'dateTime': start.toISOString(),  // Date.toISOString()
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone  // your specific timezone
            },
            'end': {
                'dateTime': end.toISOString(),  // Date.toISOString()
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone  // your specific timezone
            }
        }
        await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
            method: "POST",
            headers: {
                'Authorization':'Bearer ' + session.provider_token  //access token to google
            },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            alert('Event created. Check you google calendar!');
        });
    }

    return (
        <div className={styles.timearea}>
            <h2>Time selector UI</h2>
            {session
                ?
                <div className={styles.time}>
                    <h2>Hey there {session.user.email}</h2>
                    <p>Start of your event</p>
                    <DateTimePicker onChange={setStart} value={start} />
                    <p>End of your event</p>
                    <DateTimePicker onChange={setEnd} value={end} label="Basic date time picker" />

                    <div className={styles.eventName}>
                        <p>Event Name</p>
                        <input type="text" onChange={(e) => setEventName(e.target.value)} />
                    </div>

                    <div className={styles.eventDescription}>
                        <p>Event Description</p>
                        <textarea name="" id="" cols="51" rows="4" onChange={(e) => setEventDescription(e.target.value)}></textarea>
                        {/* <input type="text" onChange={(e) => setEventDescription(e.target.value)} /> */}
                    </div>

                    <hr />
                    <button className={styles.eventBtn} onClick={() => createCalendarEvent()}>Create Calendar Event</button>
                    <br />
                    <button className={styles.eventBtn} onClick={() => signOut()}>Sign Out</button>
                </div>
                :
                <div className={styles.time}>
                    <button className={styles.eventBtn} onClick={() => googleSignIn()}>Sign In With Google</button>
                </div>
            }
        </div>
    )
}

export default Time;