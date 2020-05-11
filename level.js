class Level {
    constructor(stages) {
        this.stages = stages;
        this.stages[0].setupCollisionDetection();
        this.currentStage = 0; //startujemy z zerowego stage'a
        this.stageStatus = 'loading';
    }

    //zwraca falsz, jezeli skonczyly sie stage'
    action() {
        if (this.stageStatus === 'loading')
            this.stageStatus = this.stages[this.currentStage].load();

        if (this.stageStatus === 'live')
            this.stageStatus = this.stages[this.currentStage].live();

        if (this.stageStatus === 'dead') {
            return this.tryToIncrementStage();
        }
        return true;
    }

    //zwraca falsz, jezeli skonczyly sie stage
    tryToIncrementStage() {
        if (this.currentStage + 1 < this.stages.length) {
            this.curentStage += 1;
            this.stageStatus = 'loading'
            this.stages[this.curentStage].setupCollisionDetection();
        } else
            return false;

        return true
    }
}