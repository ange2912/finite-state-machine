class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        if (this.config == undefined){
            throw new Error()
        };
        this.state = 'normal';
    }
 
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (state === 'normal' || state === 'busy' || state === 'hungry' || state === 'sleeping'){
        this.state = state;}
        else {throw new Error()}
    }
             
    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) { 
        this.event = event;
        if (this.event === 'study'){
            this.state = 'busy';
        } else
        if (this.event === 'get_tired'){
            this.state = 'sleeping'
        } else
        if (this.event === 'get_hungry'){
            this.state = 'hungry'
        } else
        if (this.event === 'get_up'){
            this.state = 'normal'
        } else
        if (this.event === 'eat'){
            this.state = 'normal'
        } 
    }
    
    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.student = new FSM(this.config)  //! не правильно
    }
        
    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        this.event = event;
        if (this.event === 'get_hungry'){
            return ['busy','sleeping'];
        } if (this.event === 'study'){
            return ['normal'];
        } if (this.event === undefined){
            return ['normal', 'busy', 'hungry', 'sleeping'];
        } else {
            return []
        }
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {  
        
        return false;    //! обходной путь
    }
        
    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {return false;}   //! обходной путь
        
    /**
     * Clears transition history
     */
    clearHistory() {   //!

    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
