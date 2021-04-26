import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const now = moment().minute(0).second(0).add(1, 'hours');
const clon = now.clone().add(1,'hours')
export const CalendarModal = () => {
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(clon.toDate());

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: clon.toDate()
    });

    const {notes, title,start ,end} = formValues;

    const handleInputChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    

    const closeModal = () => {
    }

    const handleStartDateChange = (e) => {
        
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }
    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);
        // console.log(formValues)
        if(momentStart.isSameOrAfter(momentEnd)){
            console.log('Fecha dos debe ser mayor')
            return;
        }
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Modal
                isOpen={true}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h1>Nuevo evento</h1>
                <hr />
                <form className="container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <KeyboardDateTimePicker
                            inputVariant="outlined"
                            ampm={false}
                            label="Fecha y hora inicio"
                            value={dateStart}
                            onChange={handleStartDateChange}
                            format="MMMM dd yyyy, HH:mm "
                            className = 'w'
                        />
                    </div>
                    <div className="form-group">
                        <KeyboardDateTimePicker
                            inputVariant="outlined"
                            ampm={false}
                            label="Fecha y hora fin"
                            value={dateEnd}
                            onChange={handleEndDateChange}
                            minDate={dateStart}
                            minDateMessage="End Date should be at least start Date "
                            format="MMMM dd yyyy, HH:mm "
                            className = 'w'
                        />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder="Título del evento"
                            name="title"
                            value={title}
                            onChange={handleInputChange}
                            autoComplete="off" />
                        <small id="emailHelp" className="form-text text-muted"> Una descripción corta </small>
                    </div>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                        >
                        </textarea>
                        <small id="emailHelp" className="form-text text-muted"> Información adicional </small>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    ><i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>
                </form>
            </Modal>
        </MuiPickersUtilsProvider>
    );
}
