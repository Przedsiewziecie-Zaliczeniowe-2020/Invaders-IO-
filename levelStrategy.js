class LevelStrategy{
    level = null;

    setLevel(level){
        this.level = level;
    }
    run(){
        this.level.action()
    }
}