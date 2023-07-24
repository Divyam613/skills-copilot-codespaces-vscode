function skillsmember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django']
    var member = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    var memberSkills = []
    for (var i = 0; i < member.length; i++) {
        memberSkills.push({
            name: member[i],
            skills: skills[i]
        })
    }
    return memberSkills
}