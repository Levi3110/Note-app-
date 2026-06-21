import Note from "../models/note.js"
export async function getAllnotes(req,res) {
 try {
    const notes  = await Note.find().sort({createdAt: -1}) // -1 will sort in order (newest first) 
    res.status(200).json(notes)
 }
 catch (error) {
    console.error("Error in getallNotes controller", error)
    res.status(500).json({message: "Internal server error"})
 }
}
export async function getNotebyId(req,res){
    try {
        console.log("ID:", req.params.id);
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found"})
        res.json(note)}
    catch(error) {
        console.error("Error in getallNotes controller", error)
    res.status(500).json({message: "Internal server error"})
    }


    
}

export async function createnote(req,res) {
    try {
        const {title, content } = req.body
        const newNote = new Note({title, content})
        await newNote.save()
        res.status(201).json({message:"Note created successfully"}) }
     catch (error) {
        console.error("Error in getallNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
    
}

export async function updatenote(req,res) {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}    , {new: true})
        if (!updatedNote) { return res.status(404).json({message:"Note not found"})}
        res.status(200).json(updatedNote)
    }
     catch(error) {
        console.error("Error in updatenote controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function deletenote(req,res) {
    try {
      const deletedNote =  await Note.findByIdAndDelete(req.params.id)
      if(!deletedNote) return res.status(404).json({message:" Note not found"})
       res.status(200).json({message:"Note deleted successfully"})
       
    }
    catch(error) {
        console.error("Error in deleteNote controller", error)
        res.status(500).json({message:"Internal server error"})
    }   

}