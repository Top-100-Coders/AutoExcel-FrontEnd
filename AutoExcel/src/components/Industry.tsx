import { useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "/@/components/ui/alert-dialog"
  import { Button } from "/@/components/ui/button"
  import { Input } from "/@/components/ui/input"
  
  export default function Industry() {
    const [isOpen, setIsOpen] = useState(true);
   
    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>What business industry are you in</AlertDialogTitle>
            <Input label="Business industry you are in...." />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
   }
  