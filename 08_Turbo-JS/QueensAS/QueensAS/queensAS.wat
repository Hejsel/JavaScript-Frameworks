(module
 (type $0 (func (result i32)))
 (type $1 (func (param i32) (result i32)))
 (type $2 (func))
 (global $~lib/rt/stub/offset (mut i32) (i32.const 0))
 (memory $0 1)
 (data $0 (i32.const 1036) ",")
 (data $0.1 (i32.const 1048) "\02\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data $1 (i32.const 1084) "<")
 (data $1.1 (i32.const 1096) "\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $2 (i32.const 1148) "<")
 (data $2.1 (i32.const 1160) "\02\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data $3 (i32.const 1212) "<")
 (data $3.1 (i32.const 1224) "\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00s\00t\00u\00b\00.\00t\00s")
 (export "JSqueens" (func $queensAS/JSqueens))
 (export "memory" (memory $0))
 (start $~start)
 (func $~lib/staticarray/StaticArray<i32>#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/rt/stub/offset
  local.set $0
  global.get $~lib/rt/stub/offset
  i32.const 4
  i32.add
  local.tee $2
  i32.const 156
  i32.add
  local.tee $1
  memory.size
  local.tee $3
  i32.const 16
  i32.shl
  i32.const 15
  i32.add
  i32.const -16
  i32.and
  local.tee $4
  i32.gt_u
  if
   local.get $3
   local.get $1
   local.get $4
   i32.sub
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $4
   local.get $3
   local.get $4
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $4
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
  end
  local.get $1
  global.set $~lib/rt/stub/offset
  local.get $0
  i32.const 156
  i32.store
  local.get $2
  i32.const 4
  i32.sub
  local.tee $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 128
  i32.store offset=16
  local.get $2
  i32.const 16
  i32.add
  local.tee $0
  i32.const 0
  i32.const 128
  memory.fill
  local.get $0
 )
 (func $queensAS/JSqueens (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  i32.const 1
  i32.sub
  local.set $3
  call $~lib/staticarray/StaticArray<i32>#constructor
  local.set $8
  call $~lib/staticarray/StaticArray<i32>#constructor
  local.set $4
  call $~lib/staticarray/StaticArray<i32>#constructor
  local.set $5
  call $~lib/staticarray/StaticArray<i32>#constructor
  local.set $6
  loop $do-loop|0
   loop $do-loop|1
    block $do-break|1
     local.get $4
     local.get $1
     i32.const 2
     i32.shl
     i32.add
     i32.load
     if (result i32)
      i32.const 1
     else
      local.get $5
      local.get $1
      local.get $2
      i32.add
      i32.const 2
      i32.shl
      i32.add
      i32.load
     end
     if (result i32)
      i32.const 1
     else
      local.get $6
      local.get $2
      local.get $3
      i32.add
      local.get $1
      i32.sub
      i32.const 2
      i32.shl
      i32.add
      i32.load
     end
     if
      local.get $1
      i32.const 1
      i32.add
      local.set $1
     else
      local.get $2
      local.get $3
      i32.ge_s
      if (result i32)
       local.get $7
       i32.const 1
       i32.add
       local.set $7
       br $do-break|1
      else
       local.get $4
       local.get $1
       i32.const 2
       i32.shl
       i32.add
       i32.const 1
       i32.store
       local.get $5
       local.get $1
       local.get $2
       i32.add
       i32.const 2
       i32.shl
       i32.add
       i32.const 1
       i32.store
       local.get $6
       local.get $2
       local.get $3
       i32.add
       local.get $1
       i32.sub
       i32.const 2
       i32.shl
       i32.add
       i32.const 1
       i32.store
       local.get $8
       local.get $2
       i32.const 2
       i32.shl
       i32.add
       local.get $1
       i32.store
       i32.const 0
       local.set $1
       local.get $2
       i32.const 1
       i32.add
      end
      local.set $2
     end
     local.get $0
     local.get $1
     i32.gt_s
     br_if $do-loop|1
    end
   end
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.const 0
   i32.lt_s
   if
    local.get $7
    return
   end
   loop $while-continue|2
    local.get $4
    local.get $8
    local.get $2
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.const 0
    i32.store
    local.get $5
    local.get $1
    local.get $2
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.const 0
    i32.store
    local.get $6
    local.get $2
    local.get $3
    i32.add
    local.get $1
    i32.sub
    i32.const 2
    i32.shl
    i32.add
    i32.const 0
    i32.store
    local.get $1
    i32.const 1
    i32.add
    local.tee $1
    local.get $0
    i32.eq
    if
     local.get $2
     i32.const 1
     i32.sub
     local.tee $2
     i32.const 0
     i32.lt_s
     if
      local.get $7
      return
     end
     br $while-continue|2
    end
   end
   br $do-loop|0
  end
  unreachable
 )
 (func $~start
  i32.const 1276
  global.set $~lib/rt/stub/offset
 )
)
