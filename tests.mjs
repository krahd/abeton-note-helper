import assert from 'node:assert/strict';

const rowOffsetsTopToBottom=[20,15,10,5,0];
const pitchClass=(midi)=>((midi%12)+12)%12;

assert.equal(rowOffsetsTopToBottom.length,5,'The grid must have five rows');
assert.deepEqual(rowOffsetsTopToBottom.map(o=>pitchClass(48+o)),[8,3,10,5,0], 'Top-to-bottom row starts must be G♯, D♯, A♯, F, C');
for(const offset of rowOffsetsTopToBottom){
  const row=Array.from({length:13},(_,column)=>pitchClass(48+offset+column));
  assert.equal(row.length,13);
  assert.equal(row[12],row[0],'Thirteenth pad must repeat the first pitch class one octave higher');
  row.slice(1).forEach((pc,index)=>assert.equal(pc,(row[index]+1)%12,'Pads must rise by one semitone to the right'));
}
for(let row=4;row>0;row--){
  const lower=pitchClass(48+rowOffsetsTopToBottom[row]);
  const upper=pitchClass(48+rowOffsetsTopToBottom[row-1]);
  assert.equal((upper-lower+12)%12,5,'Rows must rise by a perfect fourth');
}

const canonical={
  major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],dorian:[0,2,3,5,7,9,10],
  majorTriad:[0,4,7],minorTriad:[0,3,7],dominant7:[0,4,7,10],major7:[0,4,7,11],
  halfDiminished:[0,3,6,10],diminished7:[0,3,6,9]
};
assert.deepEqual(canonical.major,[0,2,4,5,7,9,11]);
assert.deepEqual(canonical.dominant7,[0,4,7,10]);

const cMajorDrop2=[48,55,59,64];
assert.deepEqual(cMajorDrop2.map(n=>n-48),[0,7,11,16],'Cmaj7 drop-2 must illuminate only C3, G3, B3 and E4');

function normalise(notes,root){return notes.map(n=>(n-root+12)%12).sort((a,b)=>a-b)}
assert.deepEqual(normalise([0,4,7],0),canonical.majorTriad);
assert.deepEqual(normalise([2,5,9],2),canonical.minorTriad);

console.log('All Ableton Note Helper tests passed.');
