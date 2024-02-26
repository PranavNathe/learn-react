import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength ] = useState(8)
  const [numAllowed, setNumAllowed ] = useState(false)
  const [charAllowed, setcharAllowed ] = useState(false)
  const [password, setPassword ] = useState("")
  const macRange = 35
  // console.log(`length: ${length}, numAllowed: ${numAllowed}, charAllowed: ${charAllowed}, Password: ${password}`);

  const passwordGenerator = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (numAllowed) string += "1234567890"
    if (charAllowed) string += "!@#$%^&*+~+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1) // generate random number from 1 to string.length
      pass += string.charAt(char) // add one random char into "pass"
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, macRange)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed])

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='bg-gray-600 p-10 rounded-lg'>
          <div className='flex w-full gap-2'>
            <input className='w-full p-2 rounded'
              type="text"
              placeholder='Password'
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button className='py-2 px-5 text-white bg-blue-800 hover:bg-blue-400 '
              onClick={copyPassToClipboard}
            >Copy</button>
          </div>
          <div className='flex w-full gap-6 pt-5'>
            <div className='flex items-center text-white gap-3'>
              <input className='p-2 rounded cursor-pointer'
                type="range"
                min={8}
                max={macRange}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className='w-24' htmlFor="">Length: {length}</label>
            </div>
            <div className='flex items-center text-white gap-2'>
              <input className='p-2 rounded cursor-pointer'
                type="checkbox"
                onChange={() => {
                  setNumAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="">Number</label>
            </div>
            <div className='flex items-center text-white gap-2'>
              <input className='p-2 rounded cursor-pointer'
                type="checkbox" 
                onChange={() => {
                  setcharAllowed(prev => !prev)
                }}
              />
              <label htmlFor="">Special Char</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
