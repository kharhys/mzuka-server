// Generated by LiveScript 1.3.1
var faker;
faker = require('faker');
module.exports = function*(next){
  var tracks, types, fakeduration, record, i$, i, type, ext, id;
  tracks = [];
  types = ['audio', 'video', 'audiomashup', 'videomashup'];
  fakeduration = function(){
    return '0' + faker.finance.mask() % 10 + ':' + faker.finance.mask() % 100;
  };
  record = function(){
    return {
      id: id,
      type: type,
      duration: fakeduration(),
      title: faker.company.bs(),
      plays: faker.finance.mask(),
      poster: faker.image.image(),
      artist: faker.name.findName(),
      avatarurl: faker.internet.avatar(),
      streamurl: '/stream/' + id + ext,
      downloadurl: '/download/' + id + ext
    };
  };
  for (i$ = 1; i$ <= 40; ++i$) {
    i = i$;
    type = types.pop();
    types.unshift(type);
    ext = type === 'audio' || type === 'audiomashup' ? '.mp3' : '.mp4';
    id = faker.finance.mask() % 10;
    if (ext === '.mp4') {
      id = Math.floor(id / 2) + 1;
    }
    if (id === 0) {
      id += 1;
    }
    tracks.push(record());
  }
  this.body = tracks;
  yield next;
};