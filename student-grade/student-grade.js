function School(){
    this.class={};
}

School.prototype.roster = function() {
    var _keys = Object.keys(this.class);
    if (_keys.length > 0) {
        _keys.forEach(function(key) {
            this.class[key].sort();
        }, this);
    }   
    return this.class;
};
    
School.prototype.grade = function(grade) { 
    if(this.class[grade]) {
        return this.class[grade].sort();
    }
    return [];
};

School.prototype.add = function(studentName, studentGrade) {
    if (this.class[studentGrade]) {
        this.class[studentGrade].push(studentName);
    } else {
        this.class[studentGrade] = [studentName];
    }

};
module.exports=School;