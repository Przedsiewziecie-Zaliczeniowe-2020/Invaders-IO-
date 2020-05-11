class LevelStrategy{
    level = null;

    setLevel(level){
        this.level = level;
    }
    run(){
        return this.level.action();
    }
}