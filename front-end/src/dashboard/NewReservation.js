import React from 'react';

export default function NewReservation() {
    return(
        <form>
            <label htmlFor='first_name'>
                First Name:&nbsp;
            </label>
            <input
                name='first_name'
                id="first_name"
                type='text'
                onChange={}
                value={}
                required
            />
            <label htmlFor='last_name'>
                Last Name:&nbsp;
            </label>
            <input
                name='last_name'
                id="last_name"
                type='text'
                onChange={}
                value={}
                required
            />
            <label htmlFor='mobile_number'>
                Mobile Number:&nbsp;
            </label>
            <input
                name='mobile_number'
                id="mobile_number"
                type='tel'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                onChange={}
                value={}
                required
            />
            <label htmlFor='reservation_date'>
                Reservation Date:&nbsp;
            </label>
            <input
                name='reservation_date'
                id="reservation_date"
                type='date'
                onChange={}
                value={}
                required
            />
            <label htmlFor='reservation_time'>
                Reservation Time:&nbsp;
            </label>
            <input
                name='reservation_time'
                id="reservation_time"
                type='time'
                onChange={}
                value={}
                required
            />
            <label htmlFor='people'>
                Party Size:&nbsp;
            </label>
            <input
                name='peope'
                id="people"
                type='number'
                onChange={}
                value={}
                required
            />
            <button type='submit' onClick={}>
                Submit
            </button>
            <button type='button' onClick={}>
                Cancel
            </button>
        </form>
    )
}